import {connect} from 'react-redux';
import {Voting} from '../components/Voting';
import * as actionCreators from '../action_creators';

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  };
}

export const VotingContainer = connect(mapStateToProps, actionCreators)(Voting);