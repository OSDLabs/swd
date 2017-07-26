
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';

const SideCard = ({ listData }) => (
  <Card style={{ width: '25%', float: 'right', marginLeft: '20px' }}>
    <CardTitle title="Latest News" />
    <CardText>
      <List>
        {listData.map((event, index) => (
          <ListItem key={index} primaryText={event} />
        ))}
      </List>
    </CardText>
  </Card>
);

SideCard.propTypes = {
  listData: PropTypes.array.isRequired,
};

export default SideCard;
