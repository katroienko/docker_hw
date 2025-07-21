provider "aws" {
  region = "eu-central-1"
}

resource "aws_s3_bucket" "my_bucket" {
  bucket = "name-group-bucket-kateryna-281024-wdm"
}
# мы хотим файловое хранилище 

# s3 ето файловое хранилище.Amazon S3