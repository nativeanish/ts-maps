import {CustomMap} from './CustomMap';
import {User} from './User';
import {Company} from './Company';
CustomMap.create();
const user1 = new User();
const user2 = new User();
const company1 = new Company();
const company2 = new Company();
CustomMap.add_marker(user1)
CustomMap.add_marker(user2);
CustomMap.add_marker(company1)
CustomMap.add_marker(company2)
