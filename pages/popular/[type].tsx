import Head from 'next/head'
import { Main, Actions, Progress } from './popular.style'
import { Layout } from '../../components/layout'
import { Row, Column } from '../../components/grid'
import { SearchInput } from '../../components/search-input'
import { Dropdown } from '../../components/dropdown'
import React from 'react'
import { ajax } from 'rxjs/ajax';
import { Subject, BehaviorSubject, combineLatest } from 'rxjs'
import { takeUntil, debounceTime, map, delay, filter, startWith } from 'rxjs/operators'
import { List } from '../../components/list/list.component'
import { IResponse, IEntry, ISortOptions } from '../../interfaces'
import { withRouter } from 'next/router';

interface IState { items: IEntry[], title: string, loading: boolean, isErrorOccured: boolean };

export class Popular extends React.Component<{ router }, IState> {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            title: '',
            loading: true,
            isErrorOccured: false
        };

        this.onSearch = this.onSearch.bind(this);
        this.sort = this.sort.bind(this);
    }

    destroy$ = new Subject();
    sortBy$ = new BehaviorSubject<ISortOptions>(null);
    onSearch$ = new BehaviorSubject('');

    componentDidMount() {
        const type = this.props.router.query.type as string;
        this.setState({ title: type == 'movie' ? 'Movies' : 'Series' });

        const entries$ = ajax.getJSON<IResponse>("/feed/sample.json")
            .pipe(takeUntil(this.destroy$), delay(1000));

        const searchText$ = this.onSearch$
            .pipe(
                debounceTime(500),
                map(text => text.toLowerCase())
            );

        combineLatest(entries$, searchText$, this.sortBy$)
            .subscribe(([res, searchText, options]) => {
                let movies = res.entries.filter(entry => entry.programType == type);

                if (searchText.length >= 3) {
                    movies = movies.filter(movie => movie.title.toLowerCase().includes(searchText))
                }

                if (options) {
                    const { by, direction } = options;

                    movies = movies.sort((a, b) => {
                        const compare = by == 'year' ? (b.releaseYear - a.releaseYear) : b.title.localeCompare(a.title);
                        return direction * compare;
                    });
                }

                this.setState({ items: movies, loading: false });
            }, err => {
                this.setState({ isErrorOccured: true });
            });
    }

    componentWillUnmount() {
        this.destroy$.next();
    }

    onSearch(searchText: string) {
        this.onSearch$.next(searchText)
    }

    sort(options: ISortOptions) {
        this.sortBy$.next(options)
    }

    getContent() {
        if (this.state.isErrorOccured) {
            return <Progress>Opps Something Went Wrong</Progress>
        }

        if (this.state.loading) {
            return <Progress>Loading...</Progress>;
        }

        if (!this.state.items.length) {
            return <Progress>No Available Data</Progress>
        }

        return <List items={this.state.items}></List>
    }

    render() {
        return (
            <Layout title={`Popular ${this.state.title}`} >
                <Head>
                    <title>Home</title>
                </Head>

                <Main>
                    <Row>
                        <Column lg="8">
                            <Actions>
                                <SearchInput onSearch={this.onSearch} />
                                <Dropdown sort={this.sort} />
                            </Actions>
                            {this.getContent()}
                        </Column>
                    </Row>
                </Main>

            </Layout>
        )
    }
}

export default withRouter(Popular)