import { Dialog } from "../../lib/components/Dialog/Dialog"

export default function UsingDialog() {
  const { isOpen, open, close } = Dialog.use()
  return (
    <section>
      <h1>Using Dialog</h1>
      <button onClick={open}>trigger</button>
      <Dialog
        style={{border: '1px solid black', background: 'pink', padding: '10px'}}
        className="dialog"
        isOpen={isOpen}
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
          onClick={close}
        >
          close button
        </Dialog.Button>
        <Dialog.Button
          as="a"
          onClick={close}
        >
          close a link
        </Dialog.Button>
        <Dialog.Button
          as="div"
          onClick={close}
        >
          close div
        </Dialog.Button>
      </Dialog>
    </section>
  )
}
