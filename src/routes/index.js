import Router from 'koa-router'
import getHealth from './health/health'
import users from './user/user'
const router = new Router()

router.get('/health', getHealth)
//RUta que optiene todos los usuarios
router.get('/api/users',users.getUsers);
//Obtiene todos los usarios por un nombre
router.get('/api/users/:name', users.getUsersActiveByName);
//Obtiene todos los ususarios por parametros pasados por un POST
router.post('/api/user',users.getUsersByParameters);

export default router
