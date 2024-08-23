import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads/events',
        filename: (req, file, cb) => {
          const fileExtension = extname(file.originalname);
          const fileName = `${uuidv4()}${fileExtension}`;
          cb(null, fileName);
        },
      }),
      limits: {
        fileSize: 1024 * 1024 * 10,
      },
      fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|pdf)$/)) {
          return cb(new Error('Only image and PDF files are allowed'), false);
        }
        cb(null, true);
      },
    }),
  ],
  exports: [MulterModule],
})
export class MulterConfigModule {}
