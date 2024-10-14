import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zjwh.android_wh_physicalfitness',
  name: '运动世界校园',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/c1fa3f37-1617-4d0a-86d3-07fdd154766f',
          snapshotUrls: 'https://i.gkd.li/i/12673495',
        },
      ],
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          name: '优量汇广告',
          activityIds: [
            'com.zjwh.android_wh_physicalfitness.activity.HomeActivity',
            'com.zjwh.android_wh_physicalfitness.ui.AdActivity',
          ],
          matches:
            '[id="com.zjwh.android_wh_physicalfitness:id/iv_close"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12673231',
            'https://i.gkd.li/i/12673523',
            'https://i.gkd.li/i/13166472',
          ],
        },
        {
          key: 1,
          name: '腾讯SDK',
          activityIds: '.activity.HomeActivity',
          matches:
            '[id="android:id/content"] >(3,4) FrameLayout[childCount>3] > FrameLayout[childCount=1] > ImageView[childCount=0][text=null]',
          exampleUrls: 'https://e.gkd.li/a7753ec9-5382-42ee-9a41-b4e2b61b9050',
          snapshotUrls: [
            'https://i.gkd.li/i/17355585',
            'https://i.gkd.li/i/17358027',
          ],
        },
        {
          key: 2,
          name: '快手SDK',
          fastQuery: true,
          activityIds: ['.activity.HomeActivity', '.ui.AdActivity'],
          matches:
            'ImageView[childCount=0] < @ViewGroup[clickable=true][childCount=1] < ViewGroup +(3,5) ViewGroup[childCount=2] > [text="广告"]',
          exampleUrls: 'https://e.gkd.li/cb21dc41-bcca-47ec-ae0a-df9aedde48b5',
          snapshotUrls: [
            'https://i.gkd.li/i/12826124',
            'https://i.gkd.li/i/13228216',
            'https://i.gkd.li/i/13601132',
          ],
        },
        {
          key: 3,
          name: '百度SDK',
          fastQuery: true,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView[clickable=true] - RelativeLayout > [text="反馈"]',
          exampleUrls: 'https://e.gkd.li/6882bcf4-1aa1-47e1-b7ad-299d4aa7bfd9',
          snapshotUrls: 'https://i.gkd.li/i/13554229',
        },
        {
          key: 4,
          name: '百青藤广告',
          activityIds:
            'com.zjwh.android_wh_physicalfitness.activity.SplashActivity',
          matches:
            '@[text="跳过"][clickable=true] +3 RelativeLayout >2 [text="点击跳转至第三方页面"]',
          snapshotUrls: 'https://i.gkd.li/i/12673349',
        },
      ],
    },
  ],
});
