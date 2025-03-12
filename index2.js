pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Build World'
                bat 'node index.js'
            }
        }
        stage('Test') {
            steps {
                echo 'Test World'
                bat 'node index.js'
            }
        }
    }
}
