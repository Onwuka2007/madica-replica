function FieldLabel({ children, required = false }) {
  return (
    <label className="block text-[0.95rem] font-medium text-[#1f2d31]">
      {children}
      {required ? <span className="text-[#d24169]"> *</span> : null}
    </label>
  )
}

function TextInput({ type = 'text', placeholder = '' }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="mt-2 h-9 w-full border border-[#c5c9cb] bg-transparent px-3 text-sm text-[#15272c] outline-none placeholder:text-[#8a9295]"
    />
  )
}

function SelectInput({ placeholder = 'Select an option' }) {
  return (
    <select className="mt-2 h-9 w-full border border-[#c5c9cb] bg-transparent px-3 text-sm text-[#15272c] outline-none">
      <option value="">{placeholder}</option>
    </select>
  )
}

export default function Apply() {
  return (
    <section className="bg-[#e5e6e7] px-5 py-10 md:py-14">
      <div className="mx-auto w-full max-w-[560px] border-t border-[#afb5b8] pt-6">
        <h1 className="m-0 text-[2.1rem] leading-[1.1] font-semibold tracking-[-0.02em] text-[#2a3438]">
          Madica Application Form
        </h1>

        <form className="mt-9 space-y-7">
          <div>
            <FieldLabel required>What is your first name?</FieldLabel>
            <TextInput />
          </div>

          <div>
            <FieldLabel required>What is your last name?</FieldLabel>
            <TextInput />
          </div>

          <div>
            <FieldLabel required>What is your email address?</FieldLabel>
            <TextInput type="email" />
          </div>

          <div>
            <FieldLabel required>What is the name of your venture?</FieldLabel>
            <TextInput />
          </div>

          <div>
            <FieldLabel required>What is your website URL?</FieldLabel>
            <p className="m-0 mt-1 text-xs text-[#6b7478]">If you have a website, please include the link here</p>
            <TextInput />
          </div>

          <div>
            <FieldLabel required>Which category best applies to your venture?</FieldLabel>
            <SelectInput />
          </div>

          <div>
            <FieldLabel required>What is your business model?</FieldLabel>
            <SelectInput />
          </div>

          <div>
            <FieldLabel required>What does your venture do?</FieldLabel>
            <p className="m-0 mt-1 text-xs text-[#6b7478]">Please briefly describe your company/solution</p>
            <textarea className="mt-2 h-24 w-full resize-y border border-[#c5c9cb] bg-transparent p-3 text-sm text-[#15272c] outline-none" />
          </div>

          <div>
            <FieldLabel required>In which country is your venture headquartered?</FieldLabel>
            <SelectInput />
          </div>

          <div>
            <FieldLabel required>Which countries do you currently operate in?</FieldLabel>
            <SelectInput />
          </div>

          <div>
            <FieldLabel required>When did you start building this company?</FieldLabel>
            <TextInput placeholder="mmmm d, yyyy" />
          </div>

          <div>
            <FieldLabel required>Where is your venture in its lifecycle?</FieldLabel>
            <SelectInput />
          </div>

          <div>
            <FieldLabel required>How does/will your venture make money?</FieldLabel>
            <textarea className="mt-2 h-24 w-full resize-y border border-[#c5c9cb] bg-transparent p-3 text-sm text-[#15272c] outline-none" />
          </div>

          <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center bg-[#63a75f] px-5 text-sm font-semibold text-white"
          >
            Submit application
          </button>
        </form>
      </div>
    </section>
  )
}
