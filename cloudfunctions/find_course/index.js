// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database({
  env: 'easyA'
})
// 云函数入口函数

exports.main = async (event, context) => {
  return await db.collection('course').where({
    abbreviation: name_abb,
    number: num
  }).get()
}