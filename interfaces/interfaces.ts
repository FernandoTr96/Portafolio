export interface Project {
    id: number;
    projectName: string;
    company: string;
    tecnologies: string;
    link: string;
    folderCloudinary: string;
}

export interface ProjectWithImages {
    id: number;
    projectName: string;
    company: string;
    tecnologies: string;
    link: string;
    folderCloudinary: string;
    images: Array<string>;
}

export interface GlobalState {
    project: Project;
    ui: {
        principalMenuOpen: boolean;
        uiTranslated: boolean;
    }
}

export interface CloudinaryImage {
    asset_id:       string;
    public_id:      string;
    folder:         string;
    filename:       string;
    display_name:   null;
    format:         string;
    version:        number;
    resource_type:  string;
    type:           string;
    created_at:     Date;
    uploaded_at:    Date;
    bytes:          number;
    backup_bytes:   number;
    width:          number;
    height:         number;
    aspect_ratio:   number;
    pixels:         number;
    url:            string;
    secure_url:     string;
    status:         string;
    access_mode:    string;
    access_control: null;
    etag:           string;
    created_by:     EdBy;
    uploaded_by:    EdBy;
}

export interface EdBy {
    access_key:  string;
    custom_id:   string;
    external_id: string;
}
