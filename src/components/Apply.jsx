import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select } from './ui/select'
import { Textarea } from './ui/textarea'

const applicationFields = [
  { id: 'firstName', label: 'What is your first name?', required: true, control: 'input' },
  { id: 'lastName', label: 'What is your last name?', required: true, control: 'input' },
  { id: 'email', label: 'What is your email address?', required: true, control: 'input', type: 'email' },
  { id: 'ventureName', label: 'What is the name of your venture?', required: true, control: 'input' },
  {
    id: 'website',
    label: 'What is your website URL?',
    required: true,
    control: 'input',
    hint: 'If you have a website, please include the link here',
  },
  {
    id: 'category',
    label: 'Which category best applies to your venture?',
    required: true,
    control: 'select',
    placeholder: 'Select an option',
  },
  {
    id: 'businessModel',
    label: 'What is your business model?',
    required: true,
    control: 'select',
    placeholder: 'Select an option',
  },
  {
    id: 'ventureDescription',
    label: 'What does your venture do?',
    required: true,
    control: 'textarea',
    hint: 'Please briefly describe your company/solution',
  },
  {
    id: 'hqCountry',
    label: 'In which country is your venture headquartered?',
    required: true,
    control: 'select',
    placeholder: 'Select an option',
  },
  {
    id: 'operatingCountries',
    label: 'Which countries do you currently operate in?',
    required: true,
    control: 'select',
    placeholder: 'Select an option',
  },
  {
    id: 'startDate',
    label: 'When did you start building this company?',
    required: true,
    control: 'input',
    placeholder: 'mmmm d, yyyy',
  },
  {
    id: 'lifecycle',
    label: 'Where is your venture in its lifecycle?',
    required: true,
    control: 'select',
    placeholder: 'Select an option',
  },
  {
    id: 'revenueModel',
    label: 'How does/will your venture make money?',
    required: true,
    control: 'textarea',
  },
]

function ApplicationField({ field }) {
  const labelContent = (
    <>
      {field.label}
      {field.required ? <span className="text-[#d24169]"> *</span> : null}
    </>
  )

  return (
    <div>
      <Label htmlFor={field.id}>{labelContent}</Label>
      {field.hint ? <p className="m-0 mt-1 text-xs text-[#6b7478]">{field.hint}</p> : null}

      {field.control === 'input' ? (
        <Input id={field.id} name={field.id} type={field.type || 'text'} placeholder={field.placeholder || ''} />
      ) : null}

      {field.control === 'textarea' ? <Textarea id={field.id} name={field.id} /> : null}

      {field.control === 'select' ? (
        <Select id={field.id} name={field.id} defaultValue="">
          <option value="" disabled>
            {field.placeholder || 'Select an option'}
          </option>
        </Select>
      ) : null}
    </div>
  )
}

export default function Apply() {
  return (
    <section className="px-5 py-12 md:px-0 md:py-16" >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-10 md:grid-cols-[1.25fr_0.95fr] md:gap-14">
          <h1 className="m-0 max-w-[700px] text-balance text-[clamp(2.25rem,5.1vw,4.1rem)] leading-[1.12] font-normal tracking-[-0.02em] text-[#011D21]">
            The future of your startup begins here
          </h1>

          <div className="max-w-[480px]">
            <p className="m-0 text-[1.03rem] leading-[1.85] font-medium text-[#102c30]">
              Thank you for your interest in Madica. Please use this form to apply. We aim to quickly review
              applications and our team will get back to you as soon as possible if we think Madica might be a good
              fit for your venture.
            </p>
          </div>
        </div>

        <div className="mt-14 bg-[#e5e6e7] px-4 py-10 md:mt-20 md:px-8 md:py-12">
          <div className="mx-auto w-full max-w-[560px] border-t border-[#afb5b8] pt-6">
            <h2 className="m-0 text-[2.1rem] leading-[1.1] font-semibold tracking-[-0.02em] text-[#2a3438]">
              Madica Application Form
            </h2>

            <form className="mt-9 space-y-7">
              {applicationFields.map((field) => (
                <ApplicationField key={field.id} field={field} />
              ))}

              <Button type="submit">Submit application</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
