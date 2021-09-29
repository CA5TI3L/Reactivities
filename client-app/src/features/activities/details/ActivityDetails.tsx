import React, {useEffect} from 'react';
import {Grid} from 'semantic-ui-react'
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import ActivityDetailedHearder from "./ActivityDetailedHearder";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedChats from "./ActivityDetailedChats";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";


export default observer(function ActivityDetails() {
    const {activityStore} = useStore();
    const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams<{id: string}>();
    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity])

    if (loadingInitial || !activity) return <LoadingComponent />;

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailedHearder activity={activity}/>
                <ActivityDetailedInfo activity={activity}/>
                <ActivityDetailedChats></ActivityDetailedChats>
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetailedSidebar/>
            </Grid.Column>
        </Grid>
    )
})
