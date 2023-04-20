import userActions from '../../repository/usersRepository'
import {body} from "koa/lib/response";

exports.getUsers=(ctx)=>{
    ctx.body ={
        users: userActions.getUsersFromDataset()
    }
}
exports.getUsersActiveByName=(ctx)=>{
    const result = userActions.OrderUserActiveByName(ctx.params.name);
    ctx.body={
        users: result
    }
}

exports.getUsersByParameters=(ctx)=>{
    try {
        const result = userActions.findUsersByParameters(ctx.request.body?.age,ctx.request.body?.name,ctx.request.body?.gender,ctx.request.body?.company,ctx.request.body?.isActive);
        if(result.length === 0){
            ctx.status=200;
            ctx.body ={
                status: 200,
                message: "No se encontró el usuario buscado"
            }
            return ctx
        }
        ctx.body={
            user: result
        }
    }catch (e) {
        ctx.status=500
        ctx.body=
        {
            status: 500,
            message: "Hubo un error al procesar los datos, intente nuevamente"
        }
    }
}
