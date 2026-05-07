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

  if (!input.projectName) errors.push('Project name is required.')
  if (!input.goal) errors.push('Creative goal is required.')
  if (!input.audience) errors.push('Target audience is required.')
  if (!input.style) errors.push('Visual style is required.')
  if (!input.duration) errors.push('Target duration is required.')

  return errors
}

export function createStarterDirectorPlan(input: DirectorBriefInput): DirectorPlan {
  const constraints = input.constraints
    ? ` Work within these constraints: ${input.constraints}.`
    : ''

  return {
    title: `${input.projectName} Direction Plan`,
    logline: `Create a ${input.duration} piece for ${input.audience} that ${input.goal.toLowerCase()}.`,
    creativeDirection: [
      `Lead with a clear audience problem, then show the project as the practical answer.`,
      `Use a ${input.style.toLowerCase()} visual language across framing, lighting, pacing, and transitions.`,
      `Keep every scene tied to the primary goal: ${input.goal}.${constraints}`,
    ],
    shotList: [
      {
        scene: 'Opening hook',
        purpose: 'Earn attention quickly and set expectations.',
        direction: `Start with a strong visual question or tension point for ${input.audience}.`,
      },
      {
        scene: 'Context and stakes',
        purpose: 'Explain why the topic matters now.',
        direction: 'Use concise narration, simple motion, and one concrete example before moving into the solution.',
      },
      {
        scene: 'Core experience',
        purpose: 'Demonstrate the product, story, or idea in action.',
        direction: `Show the most valuable moments with ${input.style.toLowerCase()} composition and confident pacing.`,
      },
      {
        scene: 'Proof and payoff',
        purpose: 'Build trust and make the outcome memorable.',
        direction: 'Use results, testimonials, before-after contrast, or a crisp summary of benefits.',
      },
      {
        scene: 'Closing action',
        purpose: 'Tell the audience exactly what to do next.',
        direction: 'End with a short call to action and one final branded visual beat.',
      },
    ],
    productionNotes: [
      'Replace this starter plan with your own model or workflow once your API is connected.',
      'Keep prompts, provider keys, and vendor logic on the server side only.',
      'Review generated direction before production; this starter output is not a substitute for human creative approval.',
    ],
    nextSteps: [
      'Connect your API in src/app/api/director/route.ts.',
      'Map your API response into the DirectorPlan shape in src/lib/director.ts.',
      'Add persistence or project history once the API contract is stable.',
    ],
  }
}
