pipeline {
    agent any

    tools {
        nodejs 'Node20'   // Jenkins > Global Tool Configuration'da tanimladigin NodeJS ismiyle ayni olmali
    }

    options {
        timestamps()
        disableConcurrentBuilds()
        ansiColor('xterm')
    }

    stages {

        stage('Checkout') {
            steps {
                echo '📥 Kaynak kod cekiliyor...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Bagimliliklar yukleniyor...'
                sh 'npm install'
            }
        }

        stage('Lint') {
            steps {
                echo '🔍 Kod kalitesi kontrol ediliyor...'
                sh 'npm run lint'
            }
        }


        stage('Manual Test') {
            steps {
                echo '🧪 Testler calistiriliyor (framework yok, elle yazilmis kontrol)...'
                sh 'npm run test:manual'
            }
        }
        
        stage('Test') {
            steps {
                echo '🧪 Testler calistiriliyor (Jest)...'
                sh 'npm test'
            }
        }

        

        stage('Build') {
            steps {
                echo '🔨 Uygulama build ediliyor...'
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Deploy asamasi (simulasyon)...'
                sh '''
                    echo "Deploy ediliyor..."
                    ls -la dist/
                    echo "Deploy basariyla tamamlandi."
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline basariyla tamamlandi, tum asamalar yesil.'
        }
        failure {
            echo '❌ Pipeline basarisiz oldu. Hangi asamada durdugunu Blue Ocean veya Stage View ekraninda gorebilirsin.'
        }
        always {
            echo "Build sonucu: ${currentBuild.currentResult}"
        }
    }
}
