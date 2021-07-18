pipeline {
    agent { docker { image 'node:14-alpine' } }
    stages {
        stage('lint') {
            steps {
                bat 'npm --version'
            }
        }
    }
}
