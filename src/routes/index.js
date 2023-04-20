import Router from 'koa-router'
import getHealth from './health/health'
import users from './user/user'
const router = new Router()

router.get('/health', getHealth)

router.get('/api/users',users.getUsers);

router.get('/api/users/:name', users.getUsersActiveByName);

router.post('/api/user',users.getUsersByParameters);

export default router
