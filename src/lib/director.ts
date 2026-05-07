export interface DirectorBriefInput {
  projectName: string
  goal: string
  audience: string
  style: string
  duration: string
  constraints?: string
}

export interface DirectorPlan {
  title: string
  logline: string
  creativeDirection: string[]
  shotList: Array<{
    scene: string
    purpose: string
    direction: string
  }>
  productionNotes: string[]
  nextSteps: string[]
}

export function normalizeDirectorBrief(input: Partial<DirectorBriefInput>): DirectorBriefInput {
  return {
    projectName: String(input.projectName || '').trim(),
    goal: String(input.goal || '').trim(),
    audience: String(input.audience || '').trim(),
    style: String(input.style || '').trim(),
    duration: String(input.duration || '').trim(),
    constraints: String(input.constraints || '').trim(),
  }
}

export function validateDirectorBrief(input: DirectorBriefInput): string[] {
  const errors: string[] = []

  if (!input.projectName) errors.push('请填写项目名称。')
  if (!input.goal) errors.push('请填写创意目标。')
  if (!input.audience) errors.push('请填写目标受众。')
  if (!input.style) errors.push('请填写视觉风格。')
  if (!input.duration) errors.push('请填写目标时长。')

  return errors
}

export function createStarterDirectorPlan(input: DirectorBriefInput): DirectorPlan {
  const constraints = input.constraints
    ? ` 同时需要遵守这些限制条件：${input.constraints}。`
    : ''

  return {
    title: `${input.projectName} 导演方案`,
    logline: `为${input.audience}制作一支${input.duration}的内容，目标是：${input.goal}。`,
    creativeDirection: [
      '开场先呈现目标受众最关心的问题，再把项目作为清晰、可执行的解决方案推出。',
      `在构图、光线、节奏和转场上统一采用“${input.style}”的视觉语言。`,
      `每个镜头都需要服务于核心目标：${input.goal}。${constraints}`,
    ],
    shotList: [
      {
        scene: '开场钩子',
        purpose: '快速抓住注意力，并建立观看预期。',
        direction: `围绕${input.audience}的真实痛点，提出一个强烈的视觉问题或冲突。`,
      },
      {
        scene: '背景与价值',
        purpose: '说明这个主题为什么现在重要。',
        direction: '用简洁旁白、清晰动效和一个具体例子铺垫，再自然进入解决方案。',
      },
      {
        scene: '核心体验',
        purpose: '展示产品、故事或想法如何真正发挥作用。',
        direction: `用“${input.style}”的画面组织和稳定节奏，突出最有价值的关键瞬间。`,
      },
      {
        scene: '证明与回报',
        purpose: '建立信任，并让结果更容易被记住。',
        direction: '使用结果数据、用户反馈、前后对比或简洁利益点总结来增强可信度。',
      },
      {
        scene: '收尾行动',
        purpose: '明确告诉观众下一步该做什么。',
        direction: '用一句简短行动号召收束，并保留一个可替换为你自有品牌的视觉记忆点。',
      },
    ],
    productionNotes: [
      '接入你自己的 API 后，可以用真实模型或工作流替换这份本地示例方案。',
      '提示词、供应商密钥和外部服务逻辑应只保留在服务端。',
      '正式制作前请人工复核方案；本地示例输出不能替代创意审核。',
    ],
    nextSteps: [
      '在 src/app/api/director/route.ts 中接入你的生成 API。',
      '把你的 API 响应映射为 src/lib/director.ts 中的 DirectorPlan 数据结构。',
      '当 API 契约稳定后，再加入项目历史、数据持久化和权限控制。',
    ],
  }
}
