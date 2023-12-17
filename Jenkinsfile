pipeline {
    agent any


    stages {

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build the Next.js project
                sh 'npm run build'
            }
        }

        // Additional stages like testing, deployment, etc., can be added here
    }

    post {
        // Define post-build actions, like notifications or cleanup
        always {
            echo 'The build phase is completed.'
        }
    }
}
