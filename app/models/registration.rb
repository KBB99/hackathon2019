class Registration < ApplicationRecord
    mount_uploader :cv, DocumentUploader
    mount_uploader :resume, DocumentUploader
end