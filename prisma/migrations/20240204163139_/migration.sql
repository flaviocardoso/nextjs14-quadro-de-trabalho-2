-- CreateTable
CREATE TABLE `jobs` (
    `jobId` INTEGER NOT NULL AUTO_INCREMENT,
    `slug` VARCHAR(191) NOT NULL,
    `title` TINYTEXT NOT NULL,
    `type` TINYTEXT NOT NULL,
    `locationType` VARCHAR(191) NOT NULL,
    `location` MEDIUMTEXT NULL,
    `description` TEXT NULL,
    `salary` INTEGER NOT NULL,
    `companyName` TINYTEXT NOT NULL,
    `applicationEmail` VARCHAR(191) NULL,
    `applicationUrl` VARCHAR(191) NULL,
    `companyLogoUrl` VARCHAR(191) NULL,
    `aproved` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `jobs_slug_key`(`slug`),
    PRIMARY KEY (`jobId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
