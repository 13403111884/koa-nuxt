export default function (context) {
  if (context.isServer) {
    context.userAgent = context.req.headers['user-agent']
  }
}
