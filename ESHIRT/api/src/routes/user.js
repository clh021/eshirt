const {Router}= require('express')
const {postUser, getUser, getUsers, putUser, deleteUser}= require('../controllers/user')
const checkAdminScopes = require('../middlewares/authz/checkScopes');
const checkJwt = require('../middlewares/authz/checkJwt');
const router= Router()

router.get('/', checkJwt, checkAdminScopes, getUsers)
router.get('/:id', checkJwt, checkAdminScopes, getUser)
router.post('/', checkJwt, checkAdminScopes, postUser)
router.put('/:id', checkJwt, checkAdminScopes, putUser )
router.delete('/:id', checkJwt, checkAdminScopes, deleteUser)


module.exports= router