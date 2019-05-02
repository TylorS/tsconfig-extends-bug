import { Options } from '@typed/test'

const defaultTypedTestConfig: Options = {
    mode: 'node',
    files: ['src/**/*.__test__.ts'], 
    timeout: 2000,
    typeCheck: true,
    watch: false,
}

export default defaultTypedTestConfig;