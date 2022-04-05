# File Dropper by Clunesate
<b>React</b> file upload form

## Usage

### Install
`npm install file-dropper`
### Connection
1. Import library in your file <br>
`import {FileDropper} from "@clunesate/file-dropper";`
2. Paste the component where you need it <br>
`<FileDropper/>`

### Params

|             Param name              | Required |      Type       | Example Usage                                             | Description                                               | 
|:-----------------------------------:|:--------:|:---------------:|-----------------------------------------------------------|-----------------------------------------------------------|
|         <b>callbackFile</b>         |  False   |    Function     | <FileDropper callbackFile={(f) => yourFunction(f)}/>      | Callback function that returns the selected file          |
|       <b>containerClasses</b>       |  False   | Array of String | <FileDropper containerClasses={'my-awesome-class'}/>      | Allows you to set your own classes for the main container | 
|         <b>blockClasses</b>         |  False   | Array of String | <FileDropper blockClasses={'my-awesome-class'}/>          | Allows you to set your own classes for the form           |
|         <b>acceptFiles</b>          |  False   |     String      | <FileDropper acceptFiles={'img/png, img/gif'}/>           | Setting allowed file types separated by commas            |
|           <b>fileSize</b>           |  False   |       Int       | <FileDropper fileSize={104857600}/>                       | Maximum file size, default is 104857600                   |
|      <b>fileIconComponent</b>       |  False   | React Component | <FileDropper fileIconComponent={<MyAwesomeComponent/>}/>  | Main file icon                                            |
| <b>validateSuccessIconComponent</b> |  False   | React Component | <FileDropper fileIconComponent={<MyAwesomeComponent/>}/>  | Success validate icon                                     |
|  <b>validateWrongIconComponent</b>  |  False   | React Component | <FileDropper fileIconComponent={<MyAwesomeComponent/>}/>  | Wrong validate icon                                       |
