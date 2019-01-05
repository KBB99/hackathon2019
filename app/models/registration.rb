class Registration < ApplicationRecord
    mount_uploader :cv, DocumentUploader
    mount_uploader :resume, DocumentUploader
    validate :cv_size
    validate :resume_size

    def cv_size
        if cv.size > 5.megabytes
            errors.add(:cv, "should be less than 5MB")
        end
    end

    def resume_size
        if resume.size > 5.megabytes
            errors.add(:resume, "should be less than 5MB")
        end
    end

end