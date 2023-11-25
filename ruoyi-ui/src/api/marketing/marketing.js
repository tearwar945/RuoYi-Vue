import request from '@/utils/request'
import {parseStrEmpty} from "@/utils/ruoyi";

// 添加活动
export function addActivity(param) {
  return request({
    url: '/add-activity',
    method: 'post',
    params: param
  })
}


// 添加场景
export function addScene(param) {
  return request({
    url: '/add-scene',
    method: 'post',
    params: param
  })
}


// 添加活动和场景的关系
export function addSceneActivity(param) {
  return request({
    url: '/add-scene-activity',
    method: 'post',
    params: param
  })
}
