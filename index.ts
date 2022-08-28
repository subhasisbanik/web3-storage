import { Web3Storage, getFilesFromPath, File } from 'web3.storage'

function getAccessToken() {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGViYjVEQTQ0ZGNBMTRiQ2Q0NzRlODNEOUM1QWI3MzAzMDIyZEE4ZTUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjEyODk2NjEzMTIsIm5hbWUiOiJNeSBXaW5kb3dzIn0.A5WWOy9TsxwVq1M-nJhGOo2ZviOYh8K7q92rr50t7lM';
}

function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() })
}

async function checkStatus (cid: any) {
    const client = makeStorageClient();
    const status = await client.status(cid)
    console.log(status)
    if (status) {
    }
  }




async function getFiles (path: any) {
    const files = await getFilesFromPath(path)
    console.log(`read ${files.length} file(s) from ${path}`)
    return files
  }

  function makeFileObjects () {
    // You can create File objects from a Buffer of binary data
    // see: https://nodejs.org/api/buffer.html
    // Here we're just storing a JSON object, but you can store images,
    // audio, or whatever you want!
    const obj = { hello: 'world' }
    const buffer = Buffer.from(JSON.stringify(obj))
  
    const files = [
      new File(['contents-of-file-1'], 'plain-utf8.txt'),
      new File([buffer], 'hello.json')
    ]
    return files
  }

  async function storeFiles (files: any) {
    const client = makeStorageClient()
    const cid = await client.put(files)
    console.log('stored files with cid:', cid)
    return cid
  }


(async()=>{
    //let file = makeFileObjects();
    //await storeFiles(file);
    await checkStatus('bafybeif7ofpye7t4lrjaz4oxzxulhhyjovrmgj7bhv6odoawqemcegtham');
    let sampleFile = makeFileObjects();
    await storeFiles(sampleFile);
})();