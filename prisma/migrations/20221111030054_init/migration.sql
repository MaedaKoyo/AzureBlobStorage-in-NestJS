-- CreateTable
CREATE TABLE `Container` (
    `account` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NULL,

    UNIQUE INDEX `Container_account_key`(`account`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
