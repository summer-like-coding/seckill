import { result } from "lodash";
import { reProductList ,reOneProduct,reGetPath,reGetTruePath,reAddProduct,reDelete,reUpdate} from "../api"
export default {
    namespaced: true,
    actions: {
        async productList(context) {
            console.log("获取数据");
            let result = await reProductList();
            // console.log(result);
            if (result.code === 666) {
                // console.log("ok");
                context.commit("PRODUCTLIST",result.data)
            }
        },
        async oneProduct(context, data) {
            let result = await reOneProduct(data);
            console.log(result);
            if (result.code === 666) {
                context.commit("ONEPRODUCT",result.data)
            }
        },
        async getPath(context, data) {
            console.log("我可以获取到一些数据",data);
            let result = await reGetPath(data);
            // console.log(result);
            if (result.code === 666) {
                // 现在我需要将data存储起来，等会拼接起来
                context.commit('GETPATH',result.data)
            }
        },
        async getTruePath(context, data) {
            console.log("获取真正的路径", data);
            let reuslt = await reGetTruePath(data);
            if (result.code === 666) {
                console.log(result);
            }
        },
        async AddProduct(context, data) {
            console.log("增加活动", data);
            let result = await reAddProduct(data);
            console.log(result);
            if (result.code === 666) {
                console.log("操作成功");
            }
        },
        async deleteProduct(context, data) {
            console.log("删除活动", data);
            let result = await reDelete(data);
            console.log(result);
        },
        async updateProduct(context, data) {
            console.log("更改活动", data);
            let result = await reUpdate(data);
            console.log(result);
        }
    },
    mutations: {
        PRODUCTLIST($state, data) {
            // console.log("我获取到了商品列表", data);
            $state.activities = data
        },
        ONEPRODUCT($state, data) {
            $state.product = data
        },
        pay($state, data) {
            console.log("mutation----", data);
            console.log(typeof (data));
            $state.IsPay = data
        },
        GETPATH($state, data) {
            console.log(data);
            $state.onePath = data 
        },
        
    },
    state: {
        activities: [],
        product: {},
        IsPay: '',
        onePath:''
    },
    getters: {
        // times(state) {
        //     let time = [];
        //     time.push(state.product.startDate);
        //     time.push(state.product.endDate);
        //     return time
        // }
    }
}