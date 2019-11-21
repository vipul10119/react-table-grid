import {
    withData
}
from 'next-apollo'
import {
    HttpLink
} from 'apollo-link-http'

const config = {
    link: new HttpLink({
        uri: 'https://wo5j6g8j23.execute-api.us-east-1.amazonaws.com/staging', // Server URL (must be absolute)
        opts: {

        }
    })
}
export default withData(config)