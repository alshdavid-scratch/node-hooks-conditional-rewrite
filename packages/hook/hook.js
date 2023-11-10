export async function resolve(specifier, context, nextResolve) {
    const ctx = {
        ...context,
        conditions: ['source', ...context.conditions]
    }
    return nextResolve(specifier, ctx)
}
