import {useEffect, useState} from "react";
import clsx from "clsx";

import {ReactComponent as FileCheckSvg} from "./images/file-check.svg";
import {ReactComponent as WrongFileSvg} from "./images/wrong-file.svg";
import {ReactComponent as ExcelSvg} from "./images/microsoft-excel.svg";

function App({callbackFile}) {

  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState('');
  const [selectedFile, setSelectedFile] = useState({});

  useEffect(() => {
    const div = document.getElementById('dropped-block');
    div.addEventListener('dragenter', handleDragIn)
    div.addEventListener('dragleave', handleDragOut)
    div.addEventListener('dragover', handleDrag)
    div.addEventListener('drop', handleDrop)
  })

  useEffect(() => {
    return () => {
      const div = document.getElementById('dropped-block');
      div?.removeEventListener('dragenter', handleDragIn)
      div?.removeEventListener('dragleave', handleDragOut)
      div?.removeEventListener('dragover', handleDrag)
      div?.removeEventListener('drop', handleDrop)
    }
  })

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(true)
  }
  const handleDragIn = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)
  }
  const handleDragOut = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)
  }
  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      uploadPlan(e.dataTransfer)
      e.dataTransfer.clearData()
    }
    setDragging(false)
  }

  const uploadPlan = (target) => {
    const file = target?.files[0];

    if (file) {
      if (
          file.type ===
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
          file.type === 'application/vnd.ms-excel' ||
          file.type === 'text/csv'
      ) {
        if (file.size > 104857600) {
          setError('Максимально допустимый размер файла не более 100Мб');
        } else {
          setSelectedFile(file);
          callbackFile(file);
        }
      } else {
        setError('Не верный формат файла')
      }
    }
  }

  return (
      <div className={'uploader'}>
        <div
            className={clsx('uploader__block', {'uploader__block_dragging': dragging})}
            onClick={() => document.getElementById('input-file-uploader').click()}
            id={'dropped-block'}
        >
          <ExcelSvg width={40} height={40} fill={'#545454'}/>
          {(!selectedFile.name && !error) &&
              (<p className={'mt-3'}>
                Для загрузки файла кликните на выделенную
                область или перетащите документы с вашего устройства
              </p>)
          }
          {selectedFile.name &&
              (<div>
                <p><b>Имя: {selectedFile.name}</b></p>
                <span className={'d-flex align-items-center justify-content-center mt-2'}>
							<FileCheckSvg width={20} height={20} fill={'green'}/>
							<p className={'ms-2'}><b>Валидный файл</b></p>
						</span>

              </div>)
          }
          {error &&
              <span className={'d-flex align-items-center justify-content-center mt-2'}>
						<WrongFileSvg width={20} height={20} fill={'#bb2d3b'}/>
						<p className={'ms-2'}><b>{error}</b></p>
					</span>
          }
        </div>
        <input
            type="file"
            className={'d-none'}
            id={'input-file-uploader'}
            onChange={(e) => uploadPlan(e.target)}
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,
                    application/vnd.ms-excel"
        />
      </div>
  );
}

export default App;
