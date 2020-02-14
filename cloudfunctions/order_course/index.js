// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
// 云函数入口函数
const _=db.command
exports.main = async (event, context) => {
  //console.log(event.course)
  return await db.collection(`${event.course_name}`).where({
    course_tot: _.lt(1)
  }).orderBy('course_tot', 'desc')
  .get()
}