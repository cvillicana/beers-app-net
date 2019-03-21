import { friendConstants } from '../_constants/friend.constants';
import { friendService }  from '../_services/friend.services';

export const friendActions = {
    getFriends,
    getFriend
};

function getFriends() {
    return dispatch => {
        dispatch(request());

        friendService.getFriends()
            .then(
                friends => {
                    dispatch(success(friends));
                },
                error => {
                    dispatch(failure(error));
                }
            )
    };

    function request() { return { type: friendConstants.GET_FRIENDS_REQUEST } }
    function success(friends) { return { type: friendConstants.GET_FRIENDS_SUCCESS, friends } }
    function failure(error) { return { type: friendConstants.GET_FRIENDS_FAILURE, error } }
}

function getFriend() {
    return dispatch => {
        dispatch(request());

        friendService.getFriend()
            .then(
                friend => {
                    dispatch(success(friend));
                },
                error => {
                    dispatch(failure(error));
                }
            )
    };

    function request() { return { type: friendConstants.GET_FRIEND_REQUEST } }
    function success(friend) { return { type: friendConstants.GET_FRIEND_SUCCESS, friend } }
    function failure(error) { return { type: friendConstants.GET_FRIEND_FAILURE, error } }
}