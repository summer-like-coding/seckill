import { result } from "lodash";
import { reProductList ,reOneProduct,reGetPath,reGetTruePath,reAddProduct,reDelete,reUpdate,reSelect,reResult,reorderList} from "../api"
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
        },
        async selectProduct(context, data) {
            console.log("当前活动id", data);
            let result = await reSelect(data);
            console.log(result);
            console.log(result.data);
            if (result.code === 666) {
                console.log("我是否执行");
                context.commit('ONEPRODUCT',result.data)
            }
        },
        async getResult(context, data) {
            console.log("查找结果", data);
            let result = await reResult(data);
            console.log(result);
            context.commit('GETRESULT',result.msg)
        },
        async getOrderList(context, data) {
            console.log("获取到的页码等信息", data);
            let result = await reorderList(data);
            console.log(result);
            if (result.code === 200) {
                context.commit('ORDERLIST',result.data)
            }
        }
    },
    mutations: {
        PRODUCTLIST($state, data) {
            // console.log("我获取到了商品列表", data);
            $state.activities = data
        },
        ONEPRODUCT($state, data) {
            console.log(data);
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
        GETRESULT($state, data) {
            console.log("获取秒杀结果", data);
            $state.msgNew = data
        },
        ORDERLIST($state, data) {
            console.log("分页获取所有信息", data);
            $state.allOrderList = data
        }
    },
    state: {
        activities: [],
        product: {},
        isPay: 0,
        onePath: '',
        msgNew: '',
        allOrderList: [],
        productId:1
    },
    getters: {
        orderList(state) {
            return state.allOrderList.records
        },
        size(state) {
            return state.allOrderList.size
        },
        total(state) {
            return state.allOrderList.total
        },
        current(state) {
         return state.allOrderList.current   
        },
        pages(state) {
            return state.allOrderList.pages
        }
    }
}