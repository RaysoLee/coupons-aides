import { useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import Taro from "@tarojs/taro"
import bgImage from '../../assets/images/1.png'
// import { v4 as uuidv4 } from "uuid";
import './index.scss'

interface IProps {
  unit: string,
  [extra: string]: any
}

const DataToImage = (props: IProps) => {
  const [canvasId] = useState<string>("kkk")
  const { data } = props
  const [canvasData] = useState({
    canvasW: 300,
    canvasH: 150,
    bgImgPath: '/src/images/1.png',
    dialogBgPath: "",
    nickName: data.cName,
    desc: `优惠参数是${data.cNumber}`,
  })
  console.log(canvasId)
  useEffect(() => {
    buildCanvas()
  }, [data])

  const buildCanvas = () => {
    const context = Taro.createCanvasContext(canvasId, this)
    context.drawImage(bgImage, 0, 0, canvasData.canvasW, canvasData.canvasH);
    context.setFontSize(20)
    context.fillText(`${data.cName}`, 20, 20)
    context.fillText(`优惠参数是${data.cNumber}`, 100, 100)
    context.draw()
    // context.setStrokeStyle("#00ff00")
    // context.setLineWidth(5)
    // context.rect(0, 0, 200, 200)
    // context.stroke()
    // context.setStrokeStyle("#ff0000")
    // context.setLineWidth(2)
    // context.moveTo(160, 100)
    // context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    // context.moveTo(140, 100)
    // context.arc(100, 100, 40, 0, Math.PI, false)
    // context.moveTo(85, 80)
    // context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    // context.moveTo(125, 80)
    // context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    // context.stroke()
    // context.draw()
  }

  const onSaveClick = () => {
    Taro.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: canvasData.canvasW,
      height: canvasData.canvasH,
      destWidth: 300,
      destHeight: 150,
      canvasId,
      fileType: 'png',
      success: function (res) {
        console.log(res.tempFilePath)
        Taro.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          fail: (result) => {
            Taro.showToast({
              title: "保存失败",
              duration: 3000
            })
            console.log("error:", result)
          },
          success: (result) => {
            Taro.showToast({
              title: "保存成功",
              duration: 3000
            })
            console.log("success:", result)
          }
        })
      }
    })
  }

  

  return <View>
    <canvas width={150} height={100} canvas-id={canvasId}></canvas>
    <AtButton type='primary' onClick={onSaveClick}>保存图片</AtButton>
  </View>
}
export default DataToImage
   
