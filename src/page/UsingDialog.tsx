import { Dialog, useDialog } from "../../lib/components/Dialog/Dialog"

export default function UsingDialog() {
  const dialog = useDialog()
  const dialog2 = useDialog()

  return (
    <section>
      <h1>Using Dialog</h1>
      <button onClick={dialog.open}>trigger</button>
      <Dialog
        style={{border: '1px solid black', background: 'pink', padding: '10px'}}
        className="dialog"
        context={dialog}
      >

        <Dialog.Title>h1 - default</Dialog.Title>
        <Dialog.Title as="h2">h2</Dialog.Title>
        <Dialog.Title as="h3">h3</Dialog.Title>

        <Dialog.Contents>contents1</Dialog.Contents>
        <Dialog.Contents onClick={() => alert('hey!')}>Clickable contents</Dialog.Contents>

        <div style={{border: '1px solid red'}}>
          <Dialog.Contents>This Content is in the "div"</Dialog.Contents>
        </div>

        <Dialog.Button
          style={{border: '1px sold gray', background: 'white'}}
          closed
        >
          close button
        </Dialog.Button>
        <Dialog.Button
          style={{border: '1px sold gray', background: 'white'}}
          closed
        >
          close button2
        </Dialog.Button>
        <Dialog.Button
          style={{border: '1px sold gray', background: 'white'}}
          closed
        >
          close button3
        </Dialog.Button>
        <Dialog.Button
          as="a"
          onClick={dialog.close}
        >
          close a link
        </Dialog.Button>
        <Dialog.Button
          as="div"
          onClick={dialog.close}
        >
          close div
        </Dialog.Button>
      </Dialog>
      <button onClick={dialog2.open}>trigger2</button>
      <Dialog
        style={{border: '1px solid black', background: 'skyblue', padding: '10px'}}
        className="dialog"
        context={dialog2}
      >

        <Dialog.Title>h1 - default</Dialog.Title>
        <Dialog.Title as="h2">h2</Dialog.Title>
        <Dialog.Title as="h3">h3</Dialog.Title>

        <Dialog.Contents>contents1</Dialog.Contents>
        <Dialog.Contents onClick={() => alert('hey!')}>Clickable contents</Dialog.Contents>

        <div style={{border: '1px solid red'}}>
          <Dialog.Contents>This Content is in the "div"</Dialog.Contents>
        </div>

        <Dialog.Button
          style={{border: '1px sold gray', background: 'white'}}
          closed
        >
          close button
        </Dialog.Button>
        <Dialog.Button
          as="a"
          onClick={dialog2.close}
        >
          close a link
        </Dialog.Button>
        <Dialog.Button
          as="div"
          onClick={dialog2.close}
        >
          close div
        </Dialog.Button>
      </Dialog>
    </section>
  )
}
