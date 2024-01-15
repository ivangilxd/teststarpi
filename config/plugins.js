module.exports = () => ({
    tinymce:{
      enabled:true,
      config: {
        editor: {
            outputFormat: "html",
            editorConfig: {
                language: "de",
                height: 500,
                menubar: false,
                extended_valid_elements: "span, img, small",
                forced_root_block: "",
                convert_urls: false,
                entity_encoding: "raw",
                plugins:
                    "advlist autolink lists link image charmap preview anchor \
                    searchreplace visualblocks code fullscreen table emoticons nonbreaking \
                    insertdatetime media table code help wordcount powerpaste",
                toolbar:
                    "undo redo | styles | bold italic  | alignleft aligncenter alignright alignjustify |link code|nonbreaking bullist numlist| removeformat | help",
                style_formats: [
                    {
                        title: "Headings",
                        items: [
                            { title: "h1", block: "h1" },
                            { title: "h2", block: "h2" },
                            { title: "h3", block: "h3" },
                            { title: "h4", block: "h4" },
                            { title: "h5", block: "h5" },
                            { title: "h6", block: "h6" },
                        ],
                    },

                    {
                        title: "Text",
                        items: [
                            { title: "Paragraph", block: "p" },
                            {
                                title: "Paragraph with small letters",
                                block: "small",
                            },
                        ],
                    },
                ],
            },
        },
        },
    },
    'metrics':{
        enabled: true,
        resolve: './src/plugins/metrics'
      },
      'comments':{
        enabled: true,
        resolve: './src/plugins/comments'
      },
      'internallink': {
        enabled: true,
        resolve: './src/plugins/internallink'
      },
      'import-export-entries': {
        enabled: true,
    
      },
})