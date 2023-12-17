pipeline {
    agent any

    environment {
        // Define environment variables here if needed, like NODE_ENV
        // NODE_ENV = 'production'
    }

    stages {
        stage('Checkout') {
            steps {
                // Clone the Git repository
                git url: 'https://github.com/Shaharyar07/AI-Prompts.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Use Node Version Manager (nvm) to set Node.js version
                sh 'nvm use' // Make sure nvm is installed or use another way to manage Node version

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
