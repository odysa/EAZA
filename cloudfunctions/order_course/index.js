// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database({
  env: 'easyA'
})
// 云函数入口函数
const _=db.command
exports.main = async (event, context) => {
  return await db.collection('bio').where({
    course_tot: _.lt(1)
  }).orderBy('course_tot', 'desc')
  .get()
}