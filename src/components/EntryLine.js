import React from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react';

function EntryLine({ isExpense = false, name, amount }) {
    return (
        <Segment color={isExpense ? "red" : "green"}>
            <Grid columns={3} textAlign="right">
                <Grid.Row>
                    <Grid.Column width={10} textAlign="left">
                        {name}
                    </Grid.Column>
                    <Grid.Column width={3} textAlign="right">
                        {amount}
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Icon name="edit" bordered />
                        <Icon name="trash" bordered />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default EntryLine;