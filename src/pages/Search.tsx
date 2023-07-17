import React, {useState} from 'react'
import GlobalTemplate from '../components/templates/GlobalTemplate'
import Main from '../components/UI/organisms/Main'
import Filter from '../components/UI/molecules/Filter'
import SearchResults from '../components/UI/organisms/SearchResults'
import Sidebar from '../components/UI/organisms/Sidebar'

export default function SearchResultsPage() {
    const [filterMenuStatus, setFilterMenuStatus] = useState(false);
    return (
        <GlobalTemplate>
            <Sidebar />
            <Main>
                <Filter status={filterMenuStatus} setStatus={setFilterMenuStatus} />
                <SearchResults togglemenustatus={filterMenuStatus} />
            </Main>
        </GlobalTemplate>
    )
}