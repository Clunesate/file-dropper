# File Dropper by Clunesate
File upload form

## Usage

### Install
`npm install @clunesate/file-dropper@0.6.0`
### Connection
1. Import library in your file <br>
`import {FileDropper} from "@clunesate/file-dropper";`
2. Paste the component where you need it <br>
`<FileDropper/>`

### Params

|        Param name         | Required |   Type    | Example Usage                                                                                                                      | Description                                                | 
|:-------------------------:|:--------:|:---------:|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
|    <b>callbackFile</b>    |  False   | Function  | <FileDropper callbackFile={(f) => yourFunction(f)}/>                                                                               | Callback function that returns the selected file           |
|  <b>containerClasses</b>  |  False   |  String   | <FileDropper containerClasses={'my-awesome-class'}/>                                                                               | Allows you to set your own classes for the main container  | 
|    <b>blockClasses</b>    |  False   |  String   | <FileDropper blockClasses={'my-awesome-class'}/>                                                                                   | Allows you to set your own classes for the form            |
|    <b>acceptFiles</b>     |  False   |  String   | <FileDropper acceptFiles={'img/png, img/gif'}/>                                                                                    | Setting allowed file types separated by commas             |
|      <b>fileSize</b>      |  False   |    Int    | <FileDropper fileSize={104857600}/>                                                                                                | Maximum file size, default is 104857600                    |