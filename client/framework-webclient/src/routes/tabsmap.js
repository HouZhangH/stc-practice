import UserTreeView from 'routes/System/subviews/UserList/components/UserTreeView';
import OrganizationTreeView from 'routes/System/subviews/OrganizationTree/components/OrganizationTreeView';

import ItemContainer from 'common/basic/containers/ItemContainer';

const tabsmap = 
[
    {
        path: '/user_pannel',
        component: UserTreeView
    },
    {
        path: '/admin_pannel',
        component: OrganizationTreeView
    }
]

export default tabsmap