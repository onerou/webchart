var http = ''
const flag = !(process.env.NODE_ENV === 'production')

const defaultIP = 'http://192.168.195.1:3000' //列表地址
// const defaultIP = 'http://172.16.40.70:9000' //列表地址
export default {
	login: {
		loginIn: (flag ? defaultIP : http) + '/operationManage/user/loginSelect',
		loginOut: (flag ? defaultIP : http) + '/operationManage/user/logout'
	},
	home: {
		getData: (flag ? defaultIP : http) + '/user'
	}
}
