import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import StatisticGroup from "./StatisticGroup";

function DisplayBalances() {
    return (
        <Segment textAlign="center">
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <StatisticGroup
                            size="tiny"
                            color="green"
                            textAlign={{textAlign: "left"}}
                            label="Income:"
                            value="1,045.50"
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <StatisticGroup
                            size="tiny"
                            color="red"
                            textAlign={{textAlign: "left"}}
                            label="Expenses"
                            value="623.50"
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default DisplayBalances;
