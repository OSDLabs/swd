
import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';

const SideCard = () => (
  <Card style={{ width: '25%', float: 'right', marginLeft: '20px' }}>
    <CardTitle title="Latest News" />
    <CardText>
      <List>
        <ListItem primaryText="INSTITUTE DUES SEMII -16-17" />
        <ListItem primaryText="GATE 2018" />
        <ListItem primaryText="Notification for ST students applying for National Scholarship" />
        <ListItem primaryText="ATTENTION STUDENTS WHO WILL BE ON CAMPUS (SEM I, 17-18)" />
      </List>
    </CardText>
  </Card>
);


export default SideCard;
