import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '常用工具',
    items: [
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: 'Can I use',
        desc: '前端 API 兼容性查询',
        link: 'https://caniuse.com',
      },
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        desc: '在线图片压缩工具',
        link: 'https://tinypng.com',
      },
      {
        icon: 'https://devtool.tech/logo.svg',
        title: '开发者武器库',
        desc: '开发者武器库，做开发者最专业最好用的专业工具箱',
        link: 'https://devtool.tech',
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        desc: '开发人员的工具箱',
        link: 'https://tool.lu',
      },
      {
        icon: '/icons/json-cn.ico',
        title: 'Json 中文网',
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn',
      },
    ],
  },
  {
    title: 'AI 导航',
    items: [
      {
        icon: 'https://image.uisdc.com/wp-content/uploads/2023/04/nav-ai-ChatGPT.png',
        title: ' ChatGPT ',
        desc: '地表最强AI聊天机器人',
        link: 'https://chatgpt.com/',
      },
	  {
        icon: 'https://img.amz123.com/upload/diy_page/aibeiyong/202303/1679564754Google%20Bard.png',
        title: ' Gemini ',
        desc: 'Google推出的AI聊天对话机器人Bard',
        link: 'https://gemini.google.com/app',
      },
	  {
        icon: 'https://img.amz123.com/upload/image_cloud/202407/1721118005719027_Claude.webp',
        title: ' claude.ai ',
        desc: '可为用户提供聊天对话、认知推理和视觉识别等功能',
        link: 'https://claude.ai/',
      },
      {
        icon: '/icons/json-cn.ico',
        title: ' Stable Diffusion ',
        desc: '最强开源AI绘画工具',
        link: 'https://github.com/Stability-AI/stablediffusion',
      },
    ],
  },
]
