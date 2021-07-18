pipeline {
    agent {
		docker { image 'node:14-alpine' }
	}
    stages {
        stage('lint') {
            steps {
                sh 'node --version'
            }
        }
    }
}
